import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import {
  BASE_ROUTE,
  DashBoard_ROUTE,
  LOGIN_ROUTE,
  NOT_FOUND_ROUTE,
} from "@/utils/router";

const LoadingPage = lazy(() => import("@/components/loading"));
const HomePage = lazy(() => import("@/pages/home"));
const LoginPage = lazy(() => import("@/pages/login"));
const DashboardPage = lazy(() => import("@/pages/dashboard"));
const NotFoundPage = lazy(() => import("@/pages/404"));
const LayoutPage = lazy(() => import("@/components/layout"));

export default function APP() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route path={BASE_ROUTE} element={<HomePage />} index={true} />
        {/* <Route path={LOGIN_ROUTE} element={<LoginPage />} />
        <Route path={NOT_FOUND_ROUTE} element={<NotFoundPage />} />

        <Route element={<LayoutPage />}>
          <Route path={DashBoard_ROUTE} element={<DashboardPage />} />
        </Route> */}

      </Routes>
    </Suspense>
  );
}
