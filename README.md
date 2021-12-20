
![CordovaInstall](./resources/banner.png)

---

## INSTALLATION OF CORDOVA<br>
<br>
A pipelines it's a simple step by step roles for make somethings better.<br>
This file is a simple annotations for custom installation of  basic environment for *cordova + cordova assets + extras*.<br>
<br>
Important note: **it's under costruction and based on personal use.**<br>
<br>
A simple flow for installation of ex asset for cordova<br>
It's based on windows/linux workflow<br>
<br>

---

### - Install **Andriod Assets**:

<br>

- install Java JDK :<br>

  - get the windows/linux [installer resource](https://www.oracle.com/java/technologies/downloads)<br>
  - open env java on windows: <br>
    open setting on search type "*var*" click on set variable, add<br>
    `%USERPROFILE%\AppData\Local\Android\Sdk\platform-tools`<br>
    `%USERPROFILE%\AppData\Local\Android\Sdk\cmdline-tools\latest\bin`<br>
    `%USERPROFILE%\AppData\Local\Android\Sdk\tools\emulator`<br><br>

- install grandle:

  - on linux/mac: <br>
    get it on: https://gradle.org/install/ and open env with: *Step 3. Configure your system environment*

  - in windows: copy https://gradle.org/next-steps/?version=7.3.1&format=bin into C:\Program Files\Gradle\bin (or simple C: Grandle) and open env with:<br>

    open setting on search type "*var*" click on set variable, add "*C:\ YOURPATH Gradle\bin*" on *PATH*
    

- open terminal and verify:<br>
  :: `java -version` <br>
  :: `gradle -v`<br>

<br>

### - Install **IOS Assets**:

<br>

> *Although it's only for compiling, I would recommend an hackintosh on a dedicated partition due the poor performance of vm. However...*

<br>

- Follow Installation [macos-virtualbox-installation-flow](https://github.com/bertz-tech/macos-virtualbox-installation-flow)<br>

- Update system on latest version (BigSur1.1.3 or Monteray)<br>

- now install [xcode](https://cordova.apache.org/docs/en/10.x/guide/platforms/ios/index.html#installing-the-requirements) via apple store<br>

- Sync in your VSCode or Atom and other (exemple your browser)<br>

- now install cordova on mac:<br>
  > install node and npm https://treehouse.github.io/installation-guides/mac/node-mac.html<br>
  > :: 'sudo npm install -g cordova'<br>
  > ... coming soon<br>

<br>

### - Install **Cordova Assets**: 

<br>

node js installation:<br>

- on windows: <br>

  ​		[get NVM](https://docs.microsoft.com/it-it/windows/dev-environment/javascript/nodejs-on-windows) and run command:<br>		:: `nvm install node` or `nvm install --lts`<br>		after install:<br>		:: `nvm use --lts`<br>		or run [Node Installer](https://nodejs.org/it/)<br>
  ​		Check node istallation:<br>		:: `node -v`<br>		check if NPM is installed:<br>
  ​		:: `npm -v` <br>		if not installer run command:
  ​		:: `npm install -g npm@latest`<br>

  on linux:<br>

  ​	coming soon<br><br><br>

- Now cordova assets:<br>
   	:: `npm install -g cordova`<br>
   		see all warning of audit fix, if you can...<br>
   		:: `npm audit fix` <br>
   		after repair all deprecated, check cordova<br>
   		:: `npm cordova -v`<br><br><br>

- first app:<br>
  in project folder run:<br>
  :: `cordova create MYPROJECT com.MYPROJECT HelloWorld`<br>
  add platforms in your project:<br>
  :: `cordova platform add browser`<br>
  :: `cordova platform add ios`<br>
  :: `cordova platform add android`<br><br><br>

- first adds:<br>
  note: in theory the_ "--save"_ is deprecated; if _"-dev"_ not work try _"--production=false"_;

  - install [browser sync 2](cordova plugin add cordova-plugin-browsersync-gen2) for --live-reload: <br>
    :: `cordova plugin add cordova-plugin-browsersync-gen2 --save-dev`<br>
    rapid check... run cordova web server:<br>:: `cordova run --live-reload`<br>
  - install [files](https://github.com/apache/cordova-plugin-file/)<br>
    :: `cordova plugin add cordova-plugin-file` <br>
  - install [battery status](https://cordova.apache.org/docs/en/10.x/reference/cordova-plugin-battery-status/) <br>:: `cordova plugin add cordova-plugin-battery-status`
  - install [Plug-Device](https://cordova.apache.org/docs/en/10.x/reference/cordova-plugin-device/) <br>
    :: `cordova plugin add cordova-plugin-device` <br>
  - install [Net Info](https://cordova.apache.org/docs/en/10.x/reference/cordova-plugin-network-information/) <br>
    ::  `cordova plugin add cordova-plugin-network-information` <br>
  - install [Geo Localization](https://cordova.apache.org/docs/en/10.x/reference/cordova-plugin-geolocation/) <br>:: `cordova plugin add cordova-plugin-geolocation` <br>
  - install [Policy Parse](https://npm.io/package/csp-parse) <br>
    :: `npm install csp-parse` <br>
  - install [Cordova Cache](https://www.npmjs.com/package/cordova-plugin-cache) <br>
    :: ` npm i cordova-plugin-cache` <br>
  - if necessary install [Whitelist](https://github.com/apache/cordova-plugin-whitelist) <br>
    :: `cordova plugin add cordova-plugin-whitelist` <br>
  - install [Vibration](https://cordova.apache.org/docs/en/6.x/reference/cordova-plugin-vibration/) <br>
     :: `cordova plugin add cordova-plugin-vibration` <br>
     <br>
  - other possible: 
     - [camera](https://cordova.apache.org/docs/en/6.x/reference/cordova-plugin-camera/index.html) <br>
     - [media capture](https://cordova.apache.org/docs/en/6.x/reference/cordova-plugin-media-capture/index.html) <br>
     - make a [splashscreen](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-splashscreen/index.html) (not more raccomended) <br>

  <br>

- open you project app folder and check cofing.xml <br>
```<?xml version='1.0' encoding='utf-8'?>
<widget id="com.maremapp.byshapedigital" version="1.0.0" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">

	<!-- basic settings -->
	
	<name>NAMEOFAPP</name>
	<content src="index.html" />
	<description>YOURDESCRIPTION</description>
	<author email="DEVAUTHOR@MAIL.XXX" href="http://DEVAUTHOR.XXX">DEVAUTHORNAME</author>
	
	<!-- screen settings -->
	
	<preference name="BackgroundColor" value="#ffffff" />
	<preference name="Fullscreen" value="true" />
	<preference name="Orientation" value="portrait" />
	<preference name="DisallowOverscroll" value="true" />
	<preference name="UIWebViewBounce" value="false" />
	<preference name="WebViewBounce" value="false" />
	<preference name="KeyboardDisplayRequiresUserAction" value="true" />
	
	<!--app access settings (more on: https://github.com/apache/cordova-plugin-whitelist) -->
	
	<plugin name="cordova-plugin-device" spec="1" />
	<plugin name="cordova-plugin-whitelist" spec="1" />
	
	<access origin="*" />
	<access origin="cdvfile://*"/>
	<access origin="file:///*"/>
	<access origin="file:///persistent/*"/>
	<access origin="https://yourlocalhost/*"/>
	<access origin="https://yourlocalhost:3000/*"/> 
	
	<allow-intent href="http://*/*" />
	<allow-intent href="https://*/*" />
	<allow-intent href="tel:*" />
	<allow-intent href="sms:*" />
	<allow-intent href="mailto:*" />
	<allow-intent href="geo:*" />
	
	<platform name="android">
	    <allow-intent href="market:*" />
	    <preference name="AndroidPersistentFileLocation" value="Compatibility" />
	    <preference name="AndroidExtraFilesystems" value="assets, root, files, cache, sdcard, cache-external, files-external" />
	    <icon src="..." />
	</platform>
	
	<platform name="ios">
	    <allow-intent href="itms:*" />
	    <allow-intent href="itms-apps:*" />
	    <preference name="iosPersistentFileLocation" value="Compatibility" />
	    <preference name="iosExtraFilesystems" value="assets, root, files,cache, sdcard, cache-external, files-external" />
	    <icon src="...">
	</platform>

</widget>
```

<br>

for make all icons see [cordova-icon](https://github.com/AlexDisler/cordova-icon): <br>
:: `npm install cordova-icon -g`


- ... waiting next ...<br>

<br>
