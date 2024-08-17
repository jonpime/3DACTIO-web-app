import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Card, CardBody, Input, Modal, ModalHeader, ModalBody, ModalFooter, Table } from "reactstrap";
import { Link } from "react-router-dom";

import classNames from "classnames";

//import Charts
import StackedColumnChart from "./StackedColumnChart";

//import action
import { getChartsData as onGetChartsData } from "../../store/actions";

// Image
import modalimage1 from "../../assets/images/product/img-7.png";
import modalimage2 from "../../assets/images/product/img-4.png";

// Pages Components
import WelcomeComp from "./WelcomeComp";
import MonthlyEarning from "./MonthlyEarning";
import SocialSource from "./SocialSource";
import ActivityComp from "./ActivityComp";
import TopCities from "./TopCities";
import LatestTranaction from "./LatestTranaction";
import FillingPercentage from "./filling"
import StrategyElements from "./strategyelements"
import Vision3D from "./vision";
import HomeElements from "./Home";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";

//redux
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";

const Dashboard = props => {
  const [modal, setModal] = useState(false);
  const [subscribeModal, setSubscribeModal] = useState(false);

  const DashboardProperties = createSelector(
    (state) => state.Dashboard,
    (dashboard) => ({
      chartsData: dashboard.chartsData
    })
  );

  const {
    chartsData
  } = useSelector(DashboardProperties);

  const reports = [
    { title: "Orders", iconClass: "bx-copy-alt", description: "1,235" },
    { title: "Revenue", iconClass: "bx-archive-in", description: "$35, 723" },
    {
      title: "Average Price",
      iconClass: "bx-purchase-tag-alt",
      description: "$16.2",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setSubscribeModal(true);
    }, 2000);
  }, []);

  const [periodData, setPeriodData] = useState([]);
  const [periodType, setPeriodType] = useState("yearly");

  useEffect(() => {
    setPeriodData(chartsData);
  }, [chartsData]);

  const onChangeChartPeriod = pType => {
    setPeriodType(pType);
    dispatch(onGetChartsData(pType));
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetChartsData("yearly"));
  }, [dispatch]);

  //meta title
  document.title = "Dashboard | 3D ACTIO";

  const item = {
    location: "Some location", // Ajusta esta propiedad según tus datos
    value: "Some value", // Ajusta esta propiedad según tus datos
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title={props.t("")} breadcrumbItem={props.t("Dashboard")} />

          <Row>
            <Col xl="4">
              <WelcomeComp />
              <FillingPercentage item={item} />
              <ActivityComp />
            </Col>
            <Col xl="8">
              <StrategyElements item={item}/>
            <Col xl="12">
              <Vision3D item={item} />
            </Col>  
              <Card>
                <CardBody>
                  <div className="d-sm-flex flex-wrap">
                    <h4 className="card-title mb-4">Business Statistics</h4>
                    <div className="ms-auto">
                      <ul className="nav nav-pills">
                        <li className="nav-item">
                          <Link to="#" className={classNames({ active: periodType === "weekly" }, "nav-link")}
                            onClick={() => { onChangeChartPeriod("weekly"); }} id="one_month">
                            Week
                          </Link>{" "}
                        </li>
                        <li className="nav-item">
                          <Link to="#" className={classNames({ active: periodType === "monthly" }, "nav-link")}
                            onClick={() => { onChangeChartPeriod("monthly"); }} id="one_month">
                            Month
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="#" className={classNames({ active: periodType === "yearly" }, "nav-link")}
                            onClick={() => { onChangeChartPeriod("yearly"); }} id="one_month">
                            Year
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <div className="clearfix"></div> */}
                  <StackedColumnChart periodData={periodData} dataColors='["--bs-primary", "--bs-warning", "--bs-success"]' />
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg="12">
              <HomeElements item={item}/>  
            </Col>
          </Row>
        </Container>
      </div>
      
      <Modal isOpen={modal} role="dialog" autoFocus={true} centered={true} className="exampleModal" tabIndex="-1"
        toggle={() => { setModal(!modal); }}>
        <div>
          <ModalHeader toggle={() => { setModal(!modal); }}> Order Details</ModalHeader>
          <ModalBody>
            <p className="mb-2">
              Product id: <span className="text-primary">#SK2540</span>
            </p>
            <p className="mb-4">
              Billing Name: <span className="text-primary">Neal Matthews</span>
            </p>

            <div className="table-responsive">
              <Table className="table table-centered table-nowrap">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <div>
                        <img src={modalimage1} alt="" className="avatar-sm" />
                      </div>
                    </th>
                    <td>
                      <div>
                        <h5 className="text-truncate font-size-14">
                          Wireless Headphone (Black)
                        </h5>
                        <p className="text-muted mb-0">$ 225 x 1</p>
                      </div>
                    </td>
                    <td>$ 255</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <img src={modalimage2} alt="" className="avatar-sm" />
                      </div>
                    </th>
                    <td>
                      <div>
                        <h5 className="text-truncate font-size-14">
                          Hoodie (Blue)
                        </h5>
                        <p className="text-muted mb-0">$ 145 x 1</p>
                      </div>
                    </td>
                    <td>$ 145</td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <h6 className="m-0 text-end">Sub Total:</h6>
                    </td>
                    <td>$ 400</td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <h6 className="m-0 text-end">Shipping:</h6>
                    </td>
                    <td>Free</td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <h6 className="m-0 text-end">Total:</h6>
                    </td>
                    <td>$ 400</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button type="button" color="secondary" onClick={() => { setModal(!modal); }}>
              Close
            </Button>
          </ModalFooter>
        </div>
      </Modal>
    </React.Fragment>
  );
};

Dashboard.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};

export default withTranslation()(Dashboard);
