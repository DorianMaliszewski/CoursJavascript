import { Link } from "@tanstack/react-location";
import { useLocale } from "../../hooks/useLocale";
import { PATHS } from "../../paths";

type SideBarProps = {
  opened: boolean;
  onClose?: () => void;
  autoClose: boolean;
};

export const SideBar = ({ opened, onClose, autoClose }: SideBarProps) => {
  const t = useLocale();

  const handleClose = autoClose ? onClose : undefined;

  return (
    <div
      className={`fixed h-screen lg:w-2/12 max-w-screen overflow-y-scroll overscroll-y-contain ${
        opened ? "w-full z-10" : "w-0"
      }`}
    >
      <div className="bg-base-200">
        <h1 className="text-xl text-center py-4">JAVASCRIPT MMI 2</h1>
        <nav className="bg-base-200">
          <ul className="menu w-full p-2 rounded-box">
            <li>
              <Link onClick={handleClose} to={PATHS.home}>
                {t("menu.home")}
              </Link>
            </li>
            <li>
              <Link onClick={handleClose} to={PATHS.intro}>
                {t("menu.intro")}
              </Link>
            </li>
            <li className="menu-title mt-4">
              <span>{t("menu.begin.title")}</span>
            </li>
            <li>
              <Link onClick={handleClose} to={PATHS.begin.variables}>
                {t("menu.begin.children.variables")}
              </Link>
            </li>
            <li>
              <Link onClick={handleClose} to={PATHS.begin.types}>
                {t("menu.begin.children.types")}
              </Link>
            </li>
            <li>
              <Link onClick={handleClose} to={PATHS.begin.functions}>
                {t("menu.begin.children.functions")}
              </Link>
            </li>
            <li>
              <Link onClick={handleClose} to={PATHS.begin.objects}>
                {t("menu.begin.children.objects")}
              </Link>
            </li>
            <li>
              <Link onClick={handleClose} to={PATHS.begin.arrays}>
                {t("menu.begin.children.arrays")}
              </Link>
            </li>
            <li>
              <Link onClick={handleClose} to={PATHS.begin.events}>
                {t("menu.begin.children.events")}
              </Link>
            </li>
            {/* <li> */}
            {/*   <Link to={PATHS.begin.tips}>{t("menu.begin.children.tips")}</Link> */}
            {/* </li> */}
            <li>
              <Link onClick={handleClose} to={PATHS.begin.examples}>
                {t("menu.begin.children.example")}
              </Link>
            </li>
            <li>
              <Link onClick={handleClose} to={PATHS.begin.exercises}>
                {t("menu.begin.children.exercises")}
              </Link>
            </li>
            <li className="menu-title mt-4">
              <span>{t("menu.intermediate.title")}</span>
            </li>
            <li>
              <Link onClick={handleClose} to={PATHS.intermediate.conditions}>
                {t("menu.intermediate.children.conditions")}
              </Link>
            </li>
            <li>
              <Link onClick={handleClose} to={PATHS.intermediate.loops}>
                {t("menu.intermediate.children.loops")}
              </Link>
            </li>
            <li>
              <Link
                onClick={handleClose}
                to={PATHS.intermediate.arrayFunctions}
              >
                {t("menu.intermediate.children.arrayFunctions")}
              </Link>
            </li>
            <li>
              <Link onClick={handleClose} to={PATHS.intermediate.storages}>
                {t("menu.intermediate.children.storages")}
              </Link>
            </li>
            {/* <li> */}
            {/*   <Link to={PATHS.intermediate.tips}> */}
            {/*     {t("menu.intermediate.children.tips")} */}
            {/*   </Link> */}
            {/* </li> */}
            <li className="menu-title mt-4">
              <span>{t("menu.jquery.title")}</span>
            </li>
            <li>
              <Link onClick={handleClose} to={PATHS.jquery.intro}>
                {t("menu.jquery.intro")}
              </Link>
            </li>
            <li>
              <Link onClick={handleClose} to={PATHS.jquery.howto}>
                {t("menu.jquery.howto")}
              </Link>
            </li>
            <li>
              <Link onClick={handleClose} to={PATHS.jquery.usage}>
                {t("menu.jquery.usage")}
              </Link>
            </li>
            <li>
              <Link onClick={handleClose} to={PATHS.jquery.exercises}>
                {t("menu.jquery.exercises")}
              </Link>
            </li>
            <li className="mt-8">
              <Link onClick={handleClose} to={PATHS.cheatsheet}>
                TODO cheatsheet
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
