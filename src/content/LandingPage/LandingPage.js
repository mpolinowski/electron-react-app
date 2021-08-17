import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
} from 'carbon-components-react';

const props = {
  tabs: {
    selected: 0,
    role: 'navigation',
  },
  tab: {
    role: 'presentation',
    tabIndex: 0,
  },
};


const LandingPage = () => {
  return (
    <div className="bx--grid bx--grid--full-width landing-page">
      <div className="bx--row landing-page__banner">
        <div className="bx--col-lg-16">
          <Breadcrumb noTrailingSlash aria-label="Page navigation">
            <BreadcrumbItem>
              <a href="/">Introduction</a>
            </BreadcrumbItem>
          </Breadcrumb>
          <h1 className="landing-page__heading">INSTAR Carbon</h1>
        </div>
      </div>
      <div className="bx--row landing-page__r2">
        <div className="bx--col bx--no-gutter">
          <Tabs {...props.tabs} aria-label="Tab navigation">
          <Tab {...props.tab} label="Hello World!">
            <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
              <div className="bx--row landing-page__tab-content">
                <div className="bx--col-md-4 bx--col-lg-7">
                  <h2 className="landing-page__subheading">
                    What is Carbon?
                  </h2>
                  <p className="landing-page__p">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni,
                    inventore error officiis suscipit eos doloribus quam quidem,
                    sapiente voluptas repellendus debitis iusto rem voluptatum cumque
                    facilis, modi excepturi minus officia?
                  </p>
                  <Button>Learn more</Button>
                </div>
                <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
                  <img
                    className="landing-page__illo"
                    src={`${process.env.PUBLIC_URL}/tab-illo.png`}
                    alt="Carbon illustration"
                  />
                </div>
              </div>
            </div>
          </Tab>
            <Tab {...props.tab} label="Contact">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-lg-16">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quas in quasi, quisquam reiciendis repellendus natus fugit? Voluptatibus numquam placeat dicta, delectus commodi iure, quam, distinctio enim consequatur repudiandae autem!
                  </div>
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="More">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-lg-16">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, inventore error officiis suscipit eos doloribus quam quidem, sapiente voluptas repellendus debitis iusto rem voluptatum cumque facilis, modi excepturi minus officia?
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
      <div className="bx--row landing-page__r3">
        <div className="bx--col-md-4 bx--col-lg-4">
          <h3 className="landing-page__label">The Principles</h3>
        </div>
        <div className="bx--col-md-4 bx--col-lg-4">Carbon is Open</div>
        <div className="bx--col-md-4 bx--col-lg-4">Carbon is Modular</div>
        <div className="bx--col-md-4 bx--col-lg-4">Carbon is Consistent</div>
      </div>
    </div>
  );
};
export default LandingPage;