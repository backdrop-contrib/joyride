(function ($) {
  Backdrop.behaviors.joyrideContext = {
    attach:function (context, settings) {
      if(!Backdrop.settings.joyrideContext) return false;

      var auto_start = Backdrop.settings.joyrideContext.auto_start || 'undefined';
      if(auto_start == 'undefined' ||auto_start == false) return false;

      var tips_content = Backdrop.settings.joyrideContext.tips_content || 'undefined';
      if(tips_content == 'undefined') return false;

      if ($('ol#joyride-tips-content').length > 0) $('ol#joyride-tips-content').remove();

      $('body', context).append(tips_content);

      var joyride_options = {};

      var play_once = Backdrop.settings.joyrideContext.play_once || 'undefined';
      if(play_once == 'undefined' || play_once == false) {
        joyride_options.cookieMonster = false;
      } else joyride_options.cookieMonster = true;

      $('ol#joyride-tips-content').joyride(joyride_options);
    }
  };
}(jQuery));