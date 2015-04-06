(function ($) {
  Backdrop.behaviors.joyrideManualTrigger = {
    attach:function (context, settings) {
      $(document).on('click', 'a.joyride-start-link', function(event) {
        event.preventDefault();

        var tips_content = Backdrop.settings.joyrideContext.tips_content || 'undefined';
        if (tips_content == 'undefined') return false;

        if($('ol#joyride-tips-content').length > 0) $('ol#joyride-tips-content').remove();

        $('body', context).append(tips_content);

        $('ol#joyride-tips-content').joyride();

        return false;
      });
    }
  };
}(jQuery));