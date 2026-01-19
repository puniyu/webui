import { useTitle } from 'ahooks'
import { APP_NAME } from "@/utils/app";

const NotFound = () => {
  useTitle(`${APP_NAME} WebUI`);
  const imageUrl = "https://t.alcy.cc/moez";

  return (
    <div className="w-full h-screen flex justify-center items-center">
      {/* 文本区域 */}
      <div className="rounded-lg flex flex-col relative pt-5 justify-center items-center w-9/10 h-9/10 md:w-md md:h-2/4 shadow-2xl bg-white dark:bg-black">
        <div>
          <div className="text-3xl text-pink-300">页面找不到了</div>
        </div>

        <div className="pt-5 w-9/10">
          <img src={imageUrl} className="rounded-md" alt="Not Found" />
        </div>

        {/* 暗黑模式切换按钮 */}
        <div className="absolute top-4 right-4">
        </div>
      </div>
    </div>
  );
};

export default NotFound;