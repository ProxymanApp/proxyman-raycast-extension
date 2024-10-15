import { showToast, Toast } from "@raycast/api";
import { checkProxymanAppInstallation } from "./utils/utils";

export default async function Main() {

  const isInstalled = await checkProxymanAppInstallation();
  if (!isInstalled) {
    return;
  }

  await showToast({
    style: Toast.Style.Success,
    title: "Toggle System Proxy Success",
  });
}