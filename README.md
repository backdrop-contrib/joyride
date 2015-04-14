Joyride
=======

Description
-----------

This module is currently in active development and API changes are inevitable until a stable release is announced.

This module provides Backdrop integration with "Zurb's Joyride Jquery plugin":https://github.com/zurb/joyride in order to provide a tour of different html elements on your Backdrop site.

You can view a demo of how Joyride works here: http://www.zurb.com/playground/jquery-joyride-feature-tour-plugin

Backdrop Installation
---------------------

1. Download the current, stable version from https://github.com/backdrop-contrib/joyride
2. Download the current of Joyride jquery plugins at https://github.com/zurb/joyride and place in the ./libraries
4. Enable the Joyride module and libraries module
5. Enable the Joyride UI module to view the demos and edit/add/delete tours if needed
6. Check that module is working by viewing the demo pages here: admin/config/user-interface/joyride/demo.

Usage
-----

A full description of Jquery Joyride Tour features can be found at: 
http://www.zurb.com/playground/jquery-joyride-feature-tour-plugin
The Joyride module reads tours stored as Backdrop config files and loads the 
necessary JQuery and CSS needed to provide guided tours. See the included config
for an example to the storage format.

The main Joyride module will detect all existing tour config files if they are
named in the format `tour.<module>.<any_id>`. 

- Tours with `auto_start = 1` set will start on navigating to the tour path.
- Otherwise tours can be launched by providing a link created in the format
`<?php print theme('joyride_start_link'); ?>`

Tour config files may have the following settings:
- title: A human readable title.
- description: A description of the tour.
- path: The path at which the tour is active.
- module: The module providing the tour.
- machine_name: A unique machine name.
- editable: (values 0 or 1) Whether the tour is editable in Tour UI.
- auto_start: (values 0 or 1) Whether the tour will start automatically on navigating to the 
  tour path.
- play_once: (values 0 or 1) For auto_start tours, whether the tour plays once,
  or every time you navigate to the path.
- enabled: (values 0 or 1) Whether this tour is enabled.
- content: (An array of tour steps)

Tour content(steps) may have the following values:
See http://www.zurb.com/playground/jquery-joyride-feature-tour-plugin
- attributes: An array of optional attributes. 
- target: The CSS target for the step. Must begin with "." or "#"
- header: The header for the popup tip.
- body: The body of the popup tip. 
- weight: The weight of the tip. (Determines the step order.)

Tour UI
-------
- View all tours at admin/config/user-interface/joyride to edit or disable.
- New tours are saved in a `tour.tour.<machine_name>` file in the site config 
 folder (in files/<hash>/active).
- If providing a tour with your module, this config file should be copied to
  the `/config` folder of the providing module then renamed to 
  `tour.<your_module>.<machine_name>` (also rename the  "_config_name" key 
  in the config file). 
- This is useful if your wish your module to provide a guided 
 tour of its features. Joyride will automatically pick up your tour config. 
- Exported tours can be set to be editable or not. 
- Tours being created just for the use of the current site will be saved in 
  Joyride module's config folder. Careful not to mark them as not editable. 
  If this happens, the module should be disabled and the config file 
  manually edited to set editable to "1".
- Tour UI is not required for having site tours. Tours can be also written 
manually following standard Backdrop config file rules.

LICENSE
---------------    

This project is GPL v2 software. See the LICENSE.txt file in this directory 
for complete text.

CURRENT MAINTAINERS
---------------    

- Andy Shillingford (https://github.com/docwilmot/)

CREDITS   
--------------- 

This module was originally created for Drupal by Mark Koester ("Drupal user markwk":http://drupal.org/user/1094790/) at "Int3c.com":http://int3c.com and sponsored by "MicroEntrepreneur.me":http://microentrepreneur.me 
