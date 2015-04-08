Joyride
=======

Description
-----------

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
named in the format 'tour.<module>.<any_id>'. 

- Tours with 'auto_start = 1' set will start on navigating to the tour path.
- Otherwise tours can be launched by providing a link created in the format
<?php print theme('joyride_start_link'); ?>

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