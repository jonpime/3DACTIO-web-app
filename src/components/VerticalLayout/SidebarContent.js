import React, { useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";


// //Import Scrollbar
import SimpleBar from "simplebar-react";

// MetisMenu
import MetisMenu from "metismenujs";
import withRouter from "components/Common/withRouter";
import { Link } from "react-router-dom";

//i18n
import { withTranslation } from "react-i18next";

const SidebarContent = props => {
  const ref = useRef();
  const activateParentDropdown = useCallback((item) => {
    item.classList.add("active");
    const parent = item.parentElement;
    const parent2El = parent.childNodes[1];

    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show");
    }

    if (parent) {
      parent.classList.add("mm-active");
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add("mm-show"); // ul tag

        const parent3 = parent2.parentElement; // li tag

        if (parent3) {
          parent3.classList.add("mm-active"); // li
          parent3.childNodes[0].classList.add("mm-active"); //a
          const parent4 = parent3.parentElement; // ul
          if (parent4) {
            parent4.classList.add("mm-show"); // ul
            const parent5 = parent4.parentElement;
            if (parent5) {
              parent5.classList.add("mm-show"); // li
              parent5.childNodes[0].classList.add("mm-active"); // a tag
            }
          }
        }
      }
      scrollElement(item);
      return false;
    }
    scrollElement(item);
    return false;
  }, []);

  const removeActivation = (items) => {
    for (var i = 0; i < items.length; ++i) {
      var item = items[i];
      const parent = items[i].parentElement;

      if (item && item.classList.contains("active")) {
        item.classList.remove("active");
      }
      if (parent) {
        const parent2El =
          parent.childNodes && parent.childNodes.lenght && parent.childNodes[1]
            ? parent.childNodes[1]
            : null;
        if (parent2El && parent2El.id !== "side-menu") {
          parent2El.classList.remove("mm-show");
        }

        parent.classList.remove("mm-active");
        const parent2 = parent.parentElement;

        if (parent2) {
          parent2.classList.remove("mm-show");

          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.remove("mm-active"); // li
            parent3.childNodes[0].classList.remove("mm-active");

            const parent4 = parent3.parentElement; // ul
            if (parent4) {
              parent4.classList.remove("mm-show"); // ul
              const parent5 = parent4.parentElement;
              if (parent5) {
                parent5.classList.remove("mm-show"); // li
                parent5.childNodes[0].classList.remove("mm-active"); // a tag
              }
            }
          }
        }
      }
    }
  };

  const path = useLocation();
  const activeMenu = useCallback(() => {
    const pathName = path.pathname;
    let matchingMenuItem = null;
    const ul = document.getElementById("side-menu");
    const items = ul.getElementsByTagName("a");
    removeActivation(items);

    for (let i = 0; i < items.length; ++i) {
      if (pathName === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
  }, [path.pathname, activateParentDropdown]);

  useEffect(() => {
    ref.current.recalculate();
  }, []);

  useEffect(() => {
    new MetisMenu("#side-menu");
    activeMenu();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    activeMenu();
  }, [activeMenu]);

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop;
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300;
      }
    }
  }

  return (
    <React.Fragment>
      <SimpleBar className="h-100" ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">{props.t("Menu")} </li>
            <li>
              <Link to="/dashboard">
                <i className="bx bx-home-circle"></i>
                <span>{props.t("Dashboard")}</span>
              </Link>
            </li>
            <li>
              <Link to="/#" className="has-arrow ">
                <i className="bx bx-briefcase-alt-2"></i>
                <span>{props.t("Business Plan")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/company-profile">{props.t("Company Profile")}</Link>
                </li>
                <li>
                  <Link to="/business-ideas">{props.t("Business Ideas")}</Link>
                </li>
                <li>
                  <Link to="/develop-company-dna">{props.t("Develop Company DNA")}</Link>
                </li>
                <li>
                  <Link to="/company-dna">{props.t("Company DNA")}</Link>
                </li>
                <li>
                  <Link to="/industry-analysis">{props.t("Industry Analysis")}</Link>
                </li>
                <li>
                  <Link to="/pestle-analysis"> {props.t("PESTLE Analysis")}</Link>
                </li>
                <li>
                  <Link to="/swot-analysis">{props.t("SWOT Analysis")}</Link>
                </li>
                <li>
                  <Link to="/business-strategy">{props.t("Business Strategy")}</Link>
                </li>
                <li>
                  <Link to="/strategy-matrix">{props.t("Strategy Matrix")}</Link>
                </li>
                <li>
                  <Link to="/summary">{props.t("Summary")}</Link>
                </li>
                <li>
                  <Link to="/business-model-canvas">{props.t("Business Model Canvas")}</Link>
                </li>
                <li>
                  <Link to="/cash-flow">{props.t("Cash Flow Analysis")}</Link>
                </li>
                <li>
                  <Link to="/kris">{props.t("KRIs")}</Link>
                </li>
                <li>
                  <Link to="/business-plan">{props.t("Business Plan")}</Link>
                </li>
                <li>
                  <Link to="/investor-pack">{props.t("Investor Pack")}</Link>               
                </li>
              </ul>
            </li>
            <li>
              <Link to="/calendar" >
                <i className="bx bx-calendar"></i>
                <span>{props.t("Calendar")}</span>
                </Link>
            </li>
            <li>
              <Link to="/chat" >
                <i className="bx bx-chat"></i>
                <span>{props.t("Chat")}</span>
              </Link>
            </li>
            <li>
              <Link to="/#" className="has-arrow ">
                <i className="bx bxs-user-detail"></i>
                <span>{props.t("Contacts")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/contacts-grid">{props.t("User Grid")}</Link>
                </li>
                <li>
                  <Link to="/contacts-list">{props.t("User List")}</Link>
                </li>
                <li>
                  <Link to="/contacts-profile">{props.t("Profile")}</Link>
                </li>
              </ul>
            </li>            
            <li>
              <Link to="/#" className="has-arrow">
                <i className="bx bx-user-circle"></i>
                <span>{props.t("Authentication")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/pages-login">{props.t("Login")}</Link>
                </li>
                <li>
                  <Link to="/pages-register">{props.t("Register")}</Link>
                </li>
                <li>
                  <Link to="/page-recoverpw">
                    {props.t("Recover Password")}
                  </Link>
                </li>
                <li>
                  <Link to="/auth-lock-screen">{props.t("Lock Screen")}</Link>
                </li>
                <li>
                  <Link to="/page-confirm-mail">{props.t("Confirm Mail")}</Link>
                </li>
                <li>
                  <Link to="/auth-email-verification">
                    {props.t("Email Verification")}
                  </Link>
                </li>
                <li>
                  <Link to="/auth-two-step-verification">
                    {props.t("Two Step Verification")}
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/#" className="has-arrow ">
                <i className="bx bx-file"></i>
                <span>{props.t("Utility")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/pages-faqs">{props.t("FAQs")}</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  );
};

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
};

export default withRouter(withTranslation()(SidebarContent));
