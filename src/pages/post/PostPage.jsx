import Header from "@/components/Header.jsx";
import Layout from "./Layout";
import useGetWindowWidth from "@/hooks/useGetWindowWidth";
import { DeviceSizeNum } from "@/styles/DeviceSize";

function PostPage({ page }) {
  const windowWidth = useGetWindowWidth();

  return (
    <>
      {windowWidth > DeviceSizeNum.mobile && <Header />}
      <Header serviceType={true} />
      <Layout path={page} />
    </>
  );
}

export default PostPage;
