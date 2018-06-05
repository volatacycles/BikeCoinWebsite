import React, { Component } from "react";
import { Card } from "material-ui/Card";
import styles from "../Dashboard/DashboardComponent.style";
import TransactionList from "./TransactionListComponent";

import Chart1 from "../../assets/images/Bar Chart.png";
import Chart2 from "../../assets/images/Bar Chart-1.png";
import Chart3 from "../../assets/images/Bar Chart-2.png";


class TransactionComponent extends Component {
  render() {
    return (
      <div>
        <h2 style={styles.title}>Transactions Summary</h2>
        <div className="row">
          <div className="col-sm-4">
            <Card style={styles.card}>
              <div className="row">
                <div className="col-sm-6">
                  <h3 style={styles.numberSub}>100.000</h3>
                  <h4 style={styles.description}>Week</h4>
                </div>
                <div className="col-sm-6 text-right">
                  <img src={Chart1} style={styles.iconToday} />
                </div>
              </div>
            </Card>
          </div>
          <div className="col-sm-4">
            <Card style={styles.card}>
              <div className="row">
                <div className="col-sm-6">
                  <h3 style={styles.numberCon}>100.000</h3>
                  <h4 style={styles.description}>Month</h4>
                </div>
                <div className="col-sm-6 text-right">
                  <img src={Chart2} style={styles.iconToday} />
                </div>
              </div>
            </Card>
          </div>
          <div className="col-sm-4">
            <Card style={styles.card}>
              <div className="row">
                <div className="col-sm-6">
                  <h3 style={styles.numberRe}>100.000</h3>
                  <h4 style={styles.description}>Year</h4>
                </div>
                <div className="col-sm-6 text-right">
                  <img src={Chart3} style={styles.iconToday} />
                </div>
              </div>
            </Card>
          </div>
        </div>

        <Card style={styles.card}>
          <TransactionList {...this.props} />
        </Card>
      </div>
    );
  }
}

export default TransactionComponent;