# Responsive Angular TODO app

## Descriptions:
A responsive Angular TODO list app with dynamic language switching and inline editing using NGXS with storage-plugin for state management using localstorage, ngx-translate for multilanguage support, Angular material for responsive UI and Angular Universal for improved performance and SEO.

## Features
This application consists of two main components, a navigation bar at the top of the page and the core functionality of a todo list.
The navigation bar contains a logo and a language selector to dynamicly change the appcication language. Supported languages are English and Dutch with English as the default language. The core todo functionality consists of two list actions, add and filter and a list of list items. Using the list actions you can add new items by providing an item description and filter the list of list items based on the status of a list item which can be pending or done. The default filter value is "all" which means it shows all list items. Each list item has a checkbox, description text and 3 buttons: add, save and delete. Checking the list item checkbox will mark an item as completed. To edit or delete an item the add and delete buttons can be used. Be aware that the save button will only appear after the edit button has been clicked. To avoid long pages a scrollbar is used to scroll the list of list items.
All language selector value, filter value and existing items are stored in and loaded from localstorage making the app working for multiple sessions/tabs.

## Framework and additional packages:
* Angular 20
* Typescript 5
* @angular/material
* @angular/ngxs
* @ngxs/storage-plugin
* @angular/ssr
* @ngx-translate/core
* @ngx-translate/http-loader

## Requirements:
* Node.js >= 20.11.1
* Npm >= 11.0.0

## Installation:
1. 1 Clone the project
2. 2 Move to cloned project root directory
3. 3 Install dependencies using "npm install"

* Run app:
1. 1 For build and run in development mode use "ng serve"
2. 2 For production first build app using "npm run buid:ssr" then run the app using "npm run serve:ssr:app"
