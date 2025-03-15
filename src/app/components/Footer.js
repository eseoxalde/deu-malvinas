"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  const pathname = usePathname(); //

  return (
    <footer
      className={`${styles.footer} bg-teal text-white py-4`}
      role="contentinfo"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-4 d-flex flex-column align-items-center align-items-md-start mb-4 mb-md-0">
            <Link href="/" legacyBehavior>
              <a className="d-flex align-items-center mb-3 navbar-brand">
                <div className="text-start">
                  <span className="d-block">{t("title")}</span>
                  <span className="d-block">{t("malvinas")}</span>
                </div>
                <Image
                  src="/casco.svg"
                  alt={t("logo_alt")}
                  width={50}
                  height={50}
                  className="ml-2"
                />
              </a>
            </Link>
          </div>
          <div className="col-md-2 mb-4 mb-md-0">
            <h1 className={`${styles.customP}`}>{t("first_section")}</h1>
            <ul className="list-unstyled">
              <li>
                <Link href="/veteranos" legacyBehavior>
                  <a
                    className={`${styles.customLink} ${
                      pathname === "/veteranos" ? ` ${styles.active}` : ""
                    }`}
                  >
                    {t("veterans")}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/mapa" legacyBehavior>
                  <a
                    className={`${styles.customLink} ${
                      pathname === "/mapa" ? ` ${styles.active}` : ""
                    }`}
                  >
                    {t("map")}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/historia" legacyBehavior>
                  <a
                    className={`${styles.customLink} ${
                      pathname === "/historia" ? ` ${styles.active}` : ""
                    }`}
                  >
                    {t("history")}
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2 mb-4 mb-md-0">
            <h1 className={`${styles.customP}`}>{t("second_section")}:</h1>
            <p>
              <a
                href="mailto:historias.de.malvinas.argentinas@gmail.com"
                className={`${styles.customLink}`}
              >
                historias.de.malvinas.argentinas@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
