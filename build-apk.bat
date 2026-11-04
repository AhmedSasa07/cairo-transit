@echo off
echo ==============================================
echo Building Egy Metro Guide Android APK...
echo ==============================================
set JAVA_HOME=C:\Program Files\Android\Android Studio1\jbr
set ANDROID_HOME=%LOCALAPPDATA%\Android\Sdk

call npm run build
call npx cap sync android

cd android
call gradlew.bat assembleDebug
cd ..

echo.
echo ==============================================
echo APK Generated successfully at:
echo android\app\build\outputs\apk\debug\app-debug.apk
echo ==============================================
pause
