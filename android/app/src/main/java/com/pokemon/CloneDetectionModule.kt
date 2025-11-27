package com.pokemon

import android.os.Environment
import android.content.pm.PackageManager
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class CloneDetectionModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = "CloneDetection"

    @ReactMethod
    fun isClonedApp(promise: Promise) {
        try {
            val context = reactApplicationContext
            val pm = context.packageManager
            val packageName = context.packageName

            // 1. Check cloned profile
            val appInfo = pm.getApplicationInfo(packageName, 0)
            if (appInfo.uid / 100000 != 0) {
                promise.resolve(true)
                return
            }

            // 2. Check storage paths
            val filesDir = context.filesDir.absolutePath
            if (filesDir.contains("parallel") ||
                filesDir.contains("dual") ||
                filesDir.contains("virtual")) {
                promise.resolve(true)
                return
            }

            // 3. Check external storage abnormal path
            val external = Environment.getExternalStorageDirectory().absolutePath
            if (!external.contains("0")) {
                promise.resolve(true)
                return
            }

            // 4. Installed clone apps
            val cloneApps = listOf(
                "com.lbe.parallel.intl",
                "com.parallel.space.lite",
                "com.dualspace.dualspace",
                "com.excelliance.multiaccount",
                "com.jumobile.multiapp",
                "com.miui.securitycore"
            )

            for (app in cloneApps) {
                try {
                    pm.getPackageInfo(app, 0)
                    promise.resolve(true)
                    return
                } catch (_: Exception) {}
            }

            promise.resolve(false)

        } catch (e: Exception) {
            promise.reject("CLONE_ERROR", e)
        }
    }
}
