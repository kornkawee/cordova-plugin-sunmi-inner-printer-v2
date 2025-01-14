# cordova-plugin-sunmi-inner-printer
Cordova/Ionic Plugin for Sunmi V2 Printer that works with cordova and ionic. It doesn't have a native ionic wrapper yet. I will probably implement it in the near future. 

Still needs some thorough testing but I was able to compile, today, and the printer is working.

Plugin based on https://github.com/labibramadhan/cordova-sunmi-inner-printer

======================== Detail Update Version Start =======================
### Changes as follows:

#### Changelog january 14, 2025

1. Add `framework directive` into `plugin.xml` to automatically add `"com.sunmi:printerlibrary:1.0.23"` into gradle.

1. Add `framework directive` into `plugin.xml` to automatically add `"aidl true"` into gradle.

2. Add android:exported in Manifest to support Android >=12

3. Update version to `1.1.2`

#### Changelog Aug 11, 2019

1. Add `framework directive` into `plugin.xml` to automatically add `"com.sunmi:sunmiui:latest.release"` into gradle.

2. Replaced `canvas.save(Canvas.ALL_SAVE_FLAG)` with `canvas.save()` on `BitmapUtils.java`

3. Update version to `1.1.1`

#### Changelog Oct 16, 2018

1. Plugin based on [https://github.com/silviocamposs/cordova-plugin-sunmi-inner-printer](https://github.com/tmalbonph/cordova-plugin-sunmi-inner-printer/commit/c1e57f8a7db8416c644de96f6563a589f1ecc520)

2. Updated the `AIDL` with `version 2.1`

3. Bump version to `1.1.0`
======================== Detail Update Version End =======================

Example of usage in an angular component (I still need to document the rest of the possible functions, but you can take a look in the innerprinter.js:


```````````````````````````````````````
import {Component} from '@angular/core';


declare let sunmiInnerPrinter: any;

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {

	constructor() {
	}

	print() {

		const printer = new sunmiInnerPrinter();

		printer.printString(
			'This is some nice toast popup!',
			(msg) => {
				console.log(msg);
			},
			(err) => {
				console.log(err);
			}
		);

	}
}
```````````````````````````````````````
------------------------------------------------------------
How To Install Plugin :
------------------------------------------------------------
```````````````````````````````````````
ionic cordova plugin add https://github.com/kornkawee/cordova-plugin-sunmi-inner-printer-v2
```````````````````````````````````````
```````````````````````````````````````
cordova plugin add https://github.com/kornkawee/cordova-plugin-sunmi-inner-printer-v2
```````````````````````````````````````

------------------------------------------------------------
Tested with:
------------------------------------------------------------
```````````````````````````````````````
Ionic:

   Ionic CLI                     : 7.2.0
   Ionic Framework               : @ionic/angular 7.3.2
   @angular-devkit/build-angular : 16.2.1
   @angular-devkit/schematics    : 16.2.1
   @angular/cli                  : 16.2.1
   @ionic/angular-toolkit        : 10.0.0

Cordova:

   Cordova CLI       : 12.0.0 (cordova-lib@12.0.1)
   Cordova Platforms : android 13.0.0

Utility:

   cordova-res : not installed
   native-run (update available: 2.0.1) : 1.7.2

System:

   Android SDK Tools : 26.1.1 
   NodeJS            : v18.19.1
   npm               : 10.8.3
   OS                : Windows 10
```````````````````````````````````````

*Project Package.json* ( So you can see exactly what I am using in projects that are using this plugin)
```````````````````````````````````````
	"description": "An Ionic project",
	"cordova": {
		"plugins": {
			"cordova-plugin-sunmi-inner-printer-v2": {}
		},
		"platforms": [
			"android"
		]
	}
```````````````````````````````````````

java version "17.0.7"
Java(TM) SE Runtime Environment (build 17.0.7+8-LTS-224)
Java HotSpot(TM) 64-Bit Server VM (build 17.0.7+8-LTS-224, mixed mode, sharing)

------------------------------------------------------------
Gradle 8.7
------------------------------------------------------------

------------------------------------------------------------
Config Project For Android Studio
------------------------------------------------------------
Project Structure -> Gradle Version : 8.9
Setting -> Build,Execution,Deployment -> Build Tools -> Gradle : Gradle JDK 17.0.7 (Oracle OpenJDK 17.0.7)



