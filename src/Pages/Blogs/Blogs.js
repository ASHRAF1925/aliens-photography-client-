import React from "react";
import { Accordion } from "flowbite-react";
import "./Blogs.css";
import useTitle from "../../hooks/useTitle";

const Blogs = () => {
    useTitle("Blogs")
  return (
    <div className="container mx-auto text-center text-gray-900">
      <Accordion className="text-gray-900">
        <Accordion.Panel>
          <Accordion.Title>
            What is the Difference between SQL and NoSQL?
          </Accordion.Title>
          <Accordion.Content>
            <p>
              The Difference Between the SQL and NoSql Database is given Below :
            </p>
            <table>
              <thead>
                <tr>
                  <th>SQL</th>
                  <th>
                    <font color="#313030">
                      <span></span>NoSQL
                    </font>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS</span>
                    &nbsp;
                  </td>
                  <td>
                    <span>Non-relational or distributed database system.</span>
                    &nbsp;
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>
                      These databases have fixed or static or predefined schema
                    </span>
                    &nbsp;
                  </td>
                  <td>
                    <span>They have dynamic schema</span>&nbsp;
                  </td>
                </tr>
                <tr>
                  <td>
                    &nbsp;These databases are not suited for hierarchical data
                    storage.
                  </td>
                  <td>
                    <span>
                      These databases are best suited for hierarchical data
                      storage.
                    </span>
                    &nbsp;
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>
                      These databases are best suited for complex queries
                    </span>
                    &nbsp;
                  </td>
                  <td>
                    <span>
                      These databases are not so good for complex queries
                    </span>
                    &nbsp;
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Vertically Scalable</span>&nbsp;
                  </td>
                  <td>
                    <span>Horizontally scalable</span>&nbsp;
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Follows ACID property</span>&nbsp;
                  </td>
                  <td>
                    &nbsp;Follows CAP(consistency, availability, partition
                    tolerance)
                  </td>
                </tr>
              </tbody>
            </table>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>What is JWT, and how does it work??</Accordion.Title>
          <Accordion.Content>
            <p>
              JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
              compact and self-contained way for securely transmitting
              information between parties as a JSON object. This information can
              be verified and trusted because it is digitally signed. JWTs can
              be signed using a secret (with the HMAC algorithm) or a
              public/private key pair using RSA or ECDSA.
            </p>
            <p>
              Although JWTs can be encrypted to also provide secrecy between
              parties, we will focus on signed tokens. Signed tokens can verify
              the integrity of the claims contained within it, while encrypted
              tokens hide those claims from other parties. When tokens are
              signed using public/private key pairs, the signature also
              certifies that only the party holding the private key is the one
              that signed it.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            What is the difference between javascript and NodeJS?
          </Accordion.Title>
          <Accordion.Content>
            <p>
              1. JavaScript is a client-side scripting language that is
              lightweight, cross-platform, and interpreted. Both Java and HTML
              include it. Node.js, on the other hand, is a V8-based server-side
              programming language. As a result, it is used to create
              network-centric applications. It's a networked system made for
              data-intensive real-time applications. If we compare node js vs.
              python, it is clear that node js will always be the preferred
              option. <br /> 2. JavaScript is a simple programming language that
              can be used with any browser that has the JavaScript Engine
              installed. Node.js, on the other hand, is an interpreter or
              execution environment for the JavaScript programming language. It
              requires libraries that can be conveniently accessed from
              JavaScript programming to be more helpful. <br /> 3. Any engine
              may run JavaScript. As a result, writing JavaScript is incredibly
              easy, and any working environment is similar to a complete
              browser. Node.js, on the other hand, only enables the V8 engine.
              Written JavaScript code, on the other hand, can run in any
              context, regardless of whether the V8 engine is supported. <br />{" "}
              4. A specific non-blocking operation is required to access any
              operating system. There are a few essential objects in JavaScript,
              but they are entirely OS-specific. Node.js, on the other hand, can
              now operate non-blocking software tasks out of any JavaScript
              programming. It contains no OS-specific constants. Node.js
              establishes a strong relationship with the system files, allowing
              companies to read and write to the hard drive. <br /> 5. The
              critical benefits of JavaScript include a wide choice of
              interfaces and interactions and just the proper amount of server
              contact and direct visitor input. Node.js, on the other hand,
              offers node package management with over 500 modules and the
              capacity to handle many requests at the same time. It also offers
              the unique ability to enable microservice architecture and the
              Internet of Things. Even when comparing node js vs. react js, node
              js always wins.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            How does NodeJS handle multiple requests at the same time?
          </Accordion.Title>
          <Accordion.Content>
            <p>
              NodeJS receives multiple client requests and places them into
              EventQueue. NodeJS is built with the concept of event-driven
              architecture. NodeJS has its own EventLoop which is an infinite
              loop that receives requests and processes them. EventLoop is the
              listener for the EventQueue. If NodeJS can process the request
              without I/O blocking then the event loop would itself process the
              request and sends the response back to the client by itself. But,
              it is possible to process multiple requests parallelly using the
              NodeJS cluster module or worker_threads module.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default Blogs;
