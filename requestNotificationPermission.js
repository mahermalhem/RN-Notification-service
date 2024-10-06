import { Platform, PermissionsAndroid } from "react-native";
export const requestNotificationPermission = async () => {
  if (Platform.OS === "android") {
    try {
      await PermissionsAndroid.check("android.permission.POST_NOTIFICATIONS")
        .then(async (response) => {
          if (!response) {
            await PermissionsAndroid.request(
              "android.permission.POST_NOTIFICATIONS",
              {
                title: "Notification",
                message:
                  "App needs access to your notification " +
                  "so you can get Updates",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK",
              }
            );
          }
        })
        .catch((err) => {
          console.log("Notification Error=====>", err);
        });
    } catch (err) {
      console.log(err);
    }
  }
};
