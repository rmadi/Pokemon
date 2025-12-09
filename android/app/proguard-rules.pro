# Keep React Native core
-keep class com.facebook.** { *; }
-dontwarn com.facebook.**

# Keep Hermes (if you use it)
-keep class com.facebook.hermes.** { *; }
-dontwarn com.facebook.hermes.**

# Keep gesture handler
-keep class com.swmansion.** { *; }
-dontwarn com.swmansion.**

# Keep Talsec / freeRASP native hooks (avoid stripping security code)
-keep class com.aheaditec.** { *; }
-dontwarn com.aheaditec.**

# Keep ssl-pinning lib (if you re-enable it later)
-keep class com.toyberman.** { *; }
-dontwarn com.toyberman.**

# OkHttp / networking
-dontwarn okhttp3.**
-dontwarn okio.**

# Keep models used via reflection (if any)
# example:
# -keepclassmembers class com.pokemon.** { *; }
