import { showToast, Toast } from "@raycast/api";
import { checkProxymanAppInstallation } from "./utils/utils";
import { ProxymanActions, runSchemaAction } from "./utils/actions";

export default async function Main() {
  try {
    const isInstalled = await checkProxymanAppInstallation();
    if (!isInstalled) {
      return;
    }

    // runc
    await runSchemaAction(ProxymanActions.ToggleMapLocal);

    await showToast({
      style: Toast.Style.Success,
      title: "Toggle Map Local Success",
    });
  } catch (error) {
    console.error("Error toggling map local:", error);
    await showToast({
      style: Toast.Style.Failure,
      title: "Failed to Toggle Map Local",
      message: error instanceof Error ? error.message : "An unknown error occurred",
    });
  }
}