package com.pokemon

import android.content.Context
import android.net.Proxy
import com.facebook.react.bridge.*

class ProxyDetectModule(reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String {
    return "ProxyDetect"
  }

  @ReactMethod
  fun isProxyEnabled(promise: Promise) {
    try {
      val host = System.getProperty("http.proxyHost") ?: Proxy.getDefaultHost()
      val portString = System.getProperty("http.proxyPort") ?: Proxy.getDefaultPort().toString()

      val isEnabled = !host.isNullOrEmpty() && portString.toInt() != -1
      promise.resolve(isEnabled)
    } catch (e: Exception) {
      promise.resolve(false)
    }
  }
}
