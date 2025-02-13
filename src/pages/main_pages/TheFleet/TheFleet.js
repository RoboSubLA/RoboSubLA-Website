import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Link } from "react-router-dom";
import "./TheFleet.css";

// import Lanturn22 from "../../subpages/Lanturn22/Lanturn22";

const TheFleet = () => {
  return (
    <div className="fleet-container">
      {/* 2022-2023 */}
      <Jumbotron fluid className="jumbotron-container top">
        <div className="row">
          <div className="col-4-sm col-sm text">
            <h1 className="jumbotron-h1">ROBOSUB 2022-2023</h1>
            <h2 className="jumbotron-h2">Rankings:</h2>
            <p className="jumbotron-p">Overall: 25th </p>
            <p className="jumbotron-p">Video: 9th </p>
            <p className="jumbotron-p">Website: 21st </p>
            <p className="jumbotron-p">Technical-Design Report: 30th </p>
            <div className="button-container">
              <Button
                className="jumbotron-button"
                href="https://youtu.be/K124Y61hVNQ"
              >
                Team Video
              </Button>
              <Button
                className="jumbotron-button"
                href="https://robonation.org/app/uploads/sites/5/2022/06/RS2022_CSULA_RoboSubLA_TDR_4kSSZrT.pdf"
              >
                Design Report
              </Button>
            </div>
          </div>

          <div className="col-4-sm col-sm">
            <CardDeck className="fleet-carddeck">
              <Card className="fleet-card" border="dark">
                <Card.Img
                  variant="top"
                  src={"/images/subs/lanturn2022/wailord.png"}
                />
                <Card.Body className="fleet-card-body">
                  <Card.Title className="fleet-card-title">
                    Wailord 2022-2023
                  </Card.Title>
                  <Card.Text className="fleet-card-text">Club Team</Card.Text>
                </Card.Body>
                <Link className="fleet-link" to="/Wailord">
                  More Info
                </Link>
              </Card>
            </CardDeck>
          </div>

          <div className="col-4-sm col-sm">
            <CardDeck className="fleet-carddeck">
              <Card className="fleet-card" border="dark">
                <Card.Img
                  variant="top"
                  src={"/images/subs/lanturn2022/Lanturn223.jpg"}
                />
                <Card.Body className="fleet-card-body">
                  <Card.Title className="fleet-card-title">
                    Lanturn 2022-2023
                  </Card.Title>
                  <Card.Text className="fleet-card-text">
                    Senior Design Team
                  </Card.Text>
                </Card.Body>
                <Link className="fleet-link" to="/Lanturn22">
                  More Info
                </Link>
              </Card>
            </CardDeck>
          </div>
        </div>
      </Jumbotron>

      {/* 2021-2022 */}
      <Jumbotron fluid className="jumbotron-container top-2">
        <div className="row">
          <div className="col-4-sm col-sm">
            <CardDeck className="fleet-carddeck">
              <Card className="fleet-card" border="dark">
                <Card.Img
                  variant="top"
                  src={"/images/subs/lanturn2022/lanturn.jpg"}
                />
                <Card.Body className="fleet-card-body">
                  <Card.Title className="fleet-card-title">
                    Lanturn 2021-2022
                  </Card.Title>
                  <Card.Text className="fleet-card-text">
                    Senior Design Team
                  </Card.Text>
                </Card.Body>
                <Link className="fleet-link" to="/thisyear">
                  More Info
                </Link>
              </Card>
            </CardDeck>
          </div>

          <div className="col-4-sm col-sm">
            <CardDeck className="fleet-carddeck">
              <Card className="fleet-card" border="dark">
                <Card.Img
                  variant="top"
                  src={"/images/subs/blastoise/blastoise.jpg"}
                />
                <Card.Body className="fleet-card-body">
                  <Card.Title className="fleet-card-title">
                    Blastoise 2021-2022
                  </Card.Title>
                  <Card.Text className="fleet-card-text">Club Team</Card.Text>
                </Card.Body>
                <Link className="fleet-link" to="/thisyear1">
                  More Info
                </Link>
              </Card>
            </CardDeck>
          </div>

          <div className="col-4-sm col-sm text">
            <h1 className="jumbotron-h1">ROBOSUB 2021-2022</h1>
            <h2 className="jumbotron-h2">Rankings:</h2>
            <p className="jumbotron-p">Overall: 8th </p>
            <p className="jumbotron-p">Video: 32nd </p>
            <p className="jumbotron-p">Website: 21st</p>
            <p className="jumbotron-p">Technical-Design Report: 25th</p>
            <div className="button-container">
              <Button
                className="jumbotron-button"
                href="https://youtu.be/K124Y61hVNQ"
              >
                Team Video
              </Button>
              <Button
                className="jumbotron-button"
                href="https://robonation.org/app/uploads/sites/5/2022/06/RS2022_CSULA_RoboSubLA_TDR_4kSSZrT.pdf"
              >
                Design Report
              </Button>
            </div>
          </div>
        </div>
      </Jumbotron>

      {/* <CardDeck className="fleet-carddeck"></CardDeck> */}

      {/* 2020-2021 */}
      <Jumbotron fluid className="jumbotron-container mid">
        <div className="row">
          <div className="col-4-sm col-sm text">
            <h1 className="jumbotron-h1">
              ROBOSUB 2020-2021 (Online-Competition)
            </h1>
            <h2 className="jumbotron-h2">Rankings:</h2>
            <p className="jumbotron-p">Overall: ~ </p>
            <p className="jumbotron-p">Video: 22nd</p>
            <p className="jumbotron-p">Website: 28th</p>
            <p className="jumbotron-p">Technical-Design Report: 36th</p>
            <div className="button-container">
              <Button
                className="jumbotron-button"
                href="https://youtu.be/tnsonTr7G5o"
              >
                Team Video
              </Button>
              <Button
                className="jumbotron-button"
                href="https://robonation.org/app/uploads/sites/4/2021/07/RoboSub_2021_Cal-State-Univ-LA_TDR.pdf"
              >
                Design Report
              </Button>
            </div>
          </div>

          <div className="col-4-sm col-sm">
            <CardDeck className="fleet-carddeck">
              <Card className="fleet-card" border="dark">
                <Card.Img
                  variant="top"
                  src={"/images/subs/lanturn/lanturn.png"}
                />
                <Card.Body className="fleet-card-body">
                  <Card.Title className="fleet-card-title">
                    Lanturn 2020-2021
                  </Card.Title>
                  <Card.Text className="fleet-card-text">
                    Senior Design Team
                  </Card.Text>
                </Card.Body>
                {/* <Link className="fleet-link" to="/">
            More Info
          </Link> */}
              </Card>
            </CardDeck>
          </div>

          <div className="col-4-sm col-sm">
            <CardDeck className="fleet-carddeck">
              <Card className="fleet-card" border="dark">
                <Card.Img
                  variant="top"
                  src={"/images/subs/donphan/donphan2.jpg"}
                />
                <Card.Body className="fleet-card-body">
                  <Card.Title className="fleet-card-title">
                    Donphan 2020-2021
                  </Card.Title>
                  <Card.Text className="fleet-card-text">Club Team</Card.Text>
                </Card.Body>
                {/* <Link className="fleet-link" to="/">
            More Info
          </Link> */}
              </Card>
            </CardDeck>
          </div>
        </div>
      </Jumbotron>

      {/* 2019-2020 */}
      <Jumbotron fluid className="jumbotron-container mid-2">
        <div className="row">
          <div className="col-4-sm col-sm">
            <CardDeck className="fleet-carddeck">
              <Card className="fleet-card" border="dark">
                <Card.Img
                  variant="top"
                  src={
                    process.env.PUBLIC_URL + "/images/subs/lanturn/lanturn.png"
                  }
                />
                <Card.Body className="fleet-card-body">
                  <Card.Title className="fleet-card-title">
                    Lanturn 2019-2020
                  </Card.Title>
                  <Card.Text className="fleet-card-text">
                    Senior Design Team
                  </Card.Text>
                </Card.Body>
                <Link className="fleet-link" to="/Lanturn2020">
                  More Info
                </Link>
              </Card>
            </CardDeck>
          </div>

          <div className="col-4-sm col-sm">
            <CardDeck className="fleet-carddeck">
              <Card className="fleet-card" border="dark">
                <Card.Img
                  variant="top"
                  src={
                    process.env.PUBLIC_URL + "/images/subs/donphan/donphan.jpg"
                  }
                />
                <Card.Body className="fleet-card-body">
                  <Card.Title className="fleet-card-title">
                    Donphan 2019-2020
                  </Card.Title>
                  <Card.Text className="fleet-card-text">Club Team</Card.Text>
                </Card.Body>
                <Link className="fleet-link" to="/Donphan">
                  More Info
                </Link>
              </Card>
            </CardDeck>
          </div>

          <div className="col-4-sm col-sm text">
            <h1 className="jumbotron-h1">
              ROBOSUB 2019-2020 (Online-Competition)
            </h1>
            <h2 className="jumbotron-h2">Rankings:</h2>
            <p className="jumbotron-p">Overall: 11th </p>
            <p className="jumbotron-p">Video: 9th </p>
            <p className="jumbotron-p">Website: 13th </p>
            <p className="jumbotron-p">Technical-Design Report: 20th </p>
            <div className="button-container">
              <Button
                className="jumbotron-button"
                href="https://www.youtube.com/watch?v=s-sQxhKXgG8"
              >
                Team Video
              </Button>
              <Button
                className="jumbotron-button"
                href="https://robonation.org/app/uploads/sites/4/2020/08/RS20_TDR_Cal-State-LA.pdf"
              >
                Design Report
              </Button>
            </div>
          </div>
        </div>
      </Jumbotron>

      {/* 2018-2019 */}

      <Jumbotron fluid className="jumbotron-container bottom">
        <div className="row">
          <div className="col-4-sm col-sm text">
            {" "}
            <h1 className="jumbotron-h1">ROBOSUB 2018-2019</h1>
            <h2 className="jumbotron-h2">Ranked: 31st</h2>
            <div className="button-container">
              <Button
                className="jumbotron-button"
                href="https://www.youtube.com/watch?v=SNEvvSS3eq8"
              >
                Team Video
              </Button>
              <Button
                className="jumbotron-button"
                href="https://robonation.org/app/uploads/sites/4/2019/10/CSULA_RS19_TDR.pdf"
              >
                Design Report
              </Button>
            </div>{" "}
          </div>
          <div className="col-4-sm col-sm">
            <CardDeck className="fleet-carddeck">
              <Card className="fleet-card" border="dark">
                <Card.Img
                  variant="top"
                  src={
                    process.env.PUBLIC_URL +
                    "/images/subs/gyarados/gyarados.png"
                  }
                />
                <Card.Body className="fleet-card-body">
                  <Card.Title className="fleet-card-title">
                    Gyarados 2018-2019
                  </Card.Title>
                  <Card.Text className="fleet-card-text">
                    Senior Design Team
                  </Card.Text>
                </Card.Body>
                <Link className="fleet-link" to="/gyarados">
                  More Info
                </Link>
              </Card>
            </CardDeck>
          </div>
          <div className="col-4-sm col-sm">
            <CardDeck className="fleet-carddeck">
              <Card className="fleet-card" border="dark">
                <Card.Img
                  variant="top"
                  src={
                    process.env.PUBLIC_URL +
                    "/images/subs/magikarp/magikarp.png"
                  }
                />
                <Card.Body className="fleet-card-body">
                  <Card.Title className="fleet-card-title">
                    Magikarp 2018-2019
                  </Card.Title>
                  <Card.Text className="fleet-card-text">Club Team</Card.Text>
                </Card.Body>
                <Link className="fleet-link" to="/magikarp">
                  More Info
                </Link>
              </Card>
            </CardDeck>
          </div>
        </div>
      </Jumbotron>
    </div>
  );
};

export default TheFleet;
