import React from 'react';
import './Blog.css';
const Blog = () => {
    return (
        <div className='container'>
            <article className='my-3 p-3 border rounded'>
                <h3 className='text-center'>What is the difference between javscript and NodeJS ?</h3>
                <p>
                    <span className='text-warning fw-bold'>Javascrpit</span> is a programming language. That's code executed in the browser. On other side, NodeJS is Javascript runtime environment. It allows us to run javascript code on the server side.
                </p>
                <table>
                    <tr>
                        <th className='text-center'>Javascript</th>
                        <th className='text-center'>NodeJS</th>
                    </tr>
                    <tr>
                        <td>Javascript is a programming language</td>
                        <td>NodeJS is cross-platform Javascript runtime environment.</td>
                    </tr>
                    <tr>
                        <td>Javascript code can be executed in the browser.</td>
                        <td>To execute javascript code outside the browser we need the helf of nodeJS</td>
                    </tr>
                    <tr>
                        <td>It basically used on the client-side</td>
                        <td>It mostly used on the server side</td>
                    </tr>
                    <tr>
                        <td>Javascript used in the front-end development</td>
                        <td>NodeJS used in the Back-end development</td>
                    </tr>
                    <tr>
                        <td>Some of the javascript frameworks are Angular, Vue etc</td>
                        <td>Some of the NodeJS framework are Express, Koa, Nest etc</td>
                    </tr>
                </table>
            </article>
            <article className='my-3 p-3 border rounded'>
                <h3 className='text-center'>When should use NodeJS and Mongodb ?</h3>
                <p>
                    <span className='text-warning fw-bold'>Javascrpit</span> is a programming language. That's code executed in the browser. On other side, NodeJS is Javascript runtime environment. It allows us to run javascript code on the server side.
                </p>
                <p>
                    <span className='fs-5 fw-bold'>NodeJS:</span> nodejs is a cross-platform runtime environment. It's used in the server side. Though we learn javascript for client-side, we don't need to learn another programmig language for server side.Also nodejs has some benefits thats why we should use it. whose are
                    <li>There are a lot of modules avaiable for free.</li>
                    <li>Nodejs application are highly event driven and heavily I/O bound.</li>
                    <li>Handling a large number of connection to other system.</li>
                    <li>Used in network applications</li>
                </p>
                <p>
                    <span className='fs-5 fw-bold'>Mongodb:</span> There are some thats why we should use Mongodb.
                    <li>Storing large volumes of data without structure.</li>
                    <li>Supporting hybrid and multi cloud applications.</li>
                    <li>Delivering data in high performance applications.</li>
                </p>
            </article>
            <article className='my-3 p-3 border rounded'>
                <h3 className='text-center'>What is the difference between SQL and NOSQL databases ?</h3>
                <table>
                    <tr>
                        <th className='text-center'>SQL</th>
                        <th className='text-center'>NOSQL</th>
                    </tr>
                    <tr>
                        <td>Sql databases defines and manipulates data based structured query language.</td>
                        <td>nosql databases defines without structure query.</td>
                    </tr>
                    <tr>
                        <td>sql databases are vertically scalable.</td>
                        <td>nosql databases are horizontally scalable.</td>
                    </tr>
                    <tr>
                        <td>sql databases are table based.</td>
                        <td>nosql databases are key-value pairs, document based.</td>
                    </tr>
                    <tr>
                        <td>This databases has fixed or predefined schema.</td>
                        <td>This databases have dynamic schema.</td>
                    </tr>
                    <tr>
                        <td>These databases are best for complex queries.</td>
                        <td>These databases are not so good for complex queries.</td>
                    </tr>
                </table>
            </article>
            <article className='my-3 p-3 border rounded'>
                <h3 className='text-center'>What is the purpose of using jwt and how to use it ?</h3>
                <p>
                    JSON web token or JWT is a open standard that defines the way for securly transmitting information between cliend-side and server-side as a JSON object. JWT are useful for some scenrios like <b>authorization</b> and <b>information exchange</b>.
                </p>
                <p>
                    How to use it: To authenticate a user, at first client-side application send a JSON web token with the http request to backend server, which token is provided by server to specific user. Then server api validates the token and send the response.
                </p>
            </article>
        </div>
    );
};

export default Blog;