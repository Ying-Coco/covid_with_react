import React from "react";
import { Cards, Chart, CountryPicker } from "./component/export";
import { fetchData } from "./api";
import styles from "./Tracker.module.css";

class Home extends React.Component {
  state = {
    data: {},
    /* country: "", */
  };
  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }
  
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });

    //set the this.state
  }; 

  render() {
    //const { data, country } = this.state;
    const data = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange}   />
        <Chart /* data={data} country={country}  */ />

        <br></br>
      </div>
    );
  }
}

export default Home;
