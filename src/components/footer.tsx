import { APP_DESC, APP_NAME } from "@/utils/app";

const Footer = () => {
  return (
    <>
        <div className="flex flex-col items-center py-6 font-[AlibabaPuHuiTi] text-md px-4 gap-1">
      <div className="text-gray-800 font-medium">{APP_NAME}</div>
      <div className="text-gray-700 text-sm">
        © {new Date().getFullYear()} · {APP_DESC}
      </div>
    </div>
    </>

  );
};

export default Footer;