import React from "react";
import "./Linux.css";
import {
  Jumbotron,
  Col,
  Row,
  Container,
  Card,
  Button,
  Image,
  ListGroup,
} from "react-bootstrap";

const Linux = () => {
  return (
    <Container className="linux-container">
      <div className="big-header-container">
        <h1 className="big-header">Linux</h1>
        {/* <p className='linux-h1'> What is Linux </p> */}
        <p className="linux-p">
          Linux, like Windows, iOS, and macOS, is an operating system. It powers
          platforms like Android and manages communication between software and
          hardware, ensuring your computer functions properly.
        </p>
      </div>

      <ListGroup className="linux-listgroup">
        <h1 className="linux-desc">Linux Components & How They Work</h1>
        <Card className="linux-card">
          <Card.Body>
            <Card.Title className="accent-color-linux">Bootloader</Card.Title>
            <Card.Text>
              The software that manages the boot process of your computer. For
              most users, this will simply be a splash screen that pops up and
              eventually goes away to boot into the operating system.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="linux-card">
          <Card.Body>
            <Card.Title className="accent-color-linux">Kernel</Card.Title>
            <Card.Text>
              This is the one piece of the whole that is actually called
              "Linux". The kernel is the core of the system and manages the CPU,
              memory, and peripheral devices. The kernel is the lowest level of
              the OS.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="linux-card">
          <Card.Body>
            <Card.Title className="accent-color-linux">Init System</Card.Title>
            <Card.Text>
              This is a sub-system that bootstraps the user space and is charged
              with controlling daemons. One of the most widely used init systems
              is systemd, which also happens to be one of the most
              controversial.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="linux-card">
          <Card.Body>
            <Card.Title className="accent-color-linux">Daemons</Card.Title>
            <Card.Text>
              These are background services (printing, sound, scheduling, etc.)
              that either start up during boot or after you log into the
              desktop.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="linux-card">
          <Card.Body>
            <Card.Title className="accent-color-linux">
              Graphical Server
            </Card.Title>
            <Card.Text>
              This is the sub-system that displays the graphics on your monitor.
              It is commonly referred to as the X server or just X.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="linux-card">
          <Card.Body>
            <Card.Title className="accent-color-linux">
              Desktop Environment
            </Card.Title>
            <Card.Text>
              This is the piece that the users actually interact with. There are
              many desktop environments to choose from (GNOME, Cinnamon, Mate,
              Pantheon, Enlightenment, KDE, Xfce, etc.).
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="linux-card">
          <Card.Body>
            <Card.Title className="accent-color-linux">Applications</Card.Title>
            <Card.Text>
              Desktop environments do not offer the full array of apps. Just
              like Windows and macOS, Linux offers thousands of high-quality
              software titles that can be easily found and installed.
            </Card.Text>
          </Card.Body>
        </Card>
      </ListGroup>

      <p className="linux-h1">Installing Linux </p>

      <Container className="linux-methods-container">
        <Row className="linux-methods-row">
          <Col md={4} className="linux-method-card">
            <div className="linux-method">
              <h3 className="linux-h1">Virtualization</h3>
              <p className="linux-p nbgc-linux-p">
                Virtualization involves installing an emulator to run an
                instance of the Linux OS inside a window on a host computer. It
                is easy to implement but requires at least 8GB of RAM.
              </p>
              <div className="linux-links-row">
                <a
                  className="linux-links"
                  href="https://www.makeuseof.com/tag/install-linux-windows-vmware-virtual-machine/"
                >
                  Install Linux on Windows
                </a>
                <a
                  className="linux-links"
                  href="https://www.imore.com/how-use-linux-your-mac-using-virtual-machine"
                >
                  Install Linux on Mac
                </a>
              </div>
            </div>
          </Col>

          <Col md={4} className="linux-method-card">
            <div className="linux-method">
              <h3 className="linux-h1">External Hard Drive Install</h3>
              <p className="linux-p">
                Installing on an external hard drive allows your host computer
                to natively boot Linux. You’ll need an additional hard drive and
                a bootable USB.
              </p>
              <iframe
                className="linux-yt"
                src="https://www.youtube.com/embed/X_fDdUgqIUQ"
                title="Bootable USB Windows"
              ></iframe>
              <iframe
                className="linux-yt"
                src="https://www.youtube.com/embed/Yf3VChom8qo"
                title="Bootable USB Mac"
              ></iframe>
              <a
                className="linux-links"
                href="https://ubuntu.com/tutorials/install-ubuntu-desktop#1-overview"
              >
                Bootable USB Help
              </a>
            </div>
          </Col>

          <Col md={4} className="linux-method-card">
            <div className="linux-method">
              <h3 className="linux-h1">Hard Drive Partitioning</h3>
              <p className="linux-p">
                Partitioning your hard drive allows separate OS installations on
                the same drive. It’s resource-efficient but requires careful
                attention to avoid data loss.
              </p>
              <div className="linux-links-row">
                <a
                  className="linux-links"
                  href="https://itsfoss.com/install-ubuntu-1404-dual-boot-mode-windows-8-81-uefi/"
                >
                  Partition Install on Windows
                </a>
                <a
                  className="linux-links"
                  href="https://www.makeuseof.com/tag/install-linux-macbook-pro/"
                >
                  Partition Install on Mac
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Linux;
