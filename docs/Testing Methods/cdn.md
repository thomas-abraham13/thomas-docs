# CDNs & How they Work

#### CDN - Content Delivery Network

- Your player downloads the segments/chunks that make up the video stream from a web-server into which the live video stream is being pushed.

- If there were only 1 web-server, then every viewer would have to access it.

- Depending on the popularity of the content, the server probably would not be able to cope with the number of users.

<p align="center"> ![cdn1](https://raw.githubusercontent.com/thomas-abraham13/thomas-docs/refs/heads/main/static/img/cdn/cdn1.png) </p>

- Instead of overloading the origin server, we use additional servers that are placed between the original (Origin) server and the viewers. These servers will request segments from the origin when required.

- They store the segments when requested, if any other viewers require the stored segments, they are served a cached copy of the original.

- In the real world, you need many thousands of these caching servers distributed around the globe in a network and these are called “Content Delivery Networks”.

<p align="center"> ![cdn1](https://raw.githubusercontent.com/thomas-abraham13/thomas-docs/refs/heads/main/static/img/cdn/cdn2.png) </p>

#### Example:

<p align="center"> ![cdn1](https://raw.githubusercontent.com/thomas-abraham13/thomas-docs/refs/heads/main/static/img/cdn/cdn3.png) </p>

### Benefits of using a CDN:
1. Improves Performance
2. Reduces Bandwidth Costs
3. Increases Content Availability
4. [Improves Security](https://www.cloudflare.com/en-gb/learning/ddos/ddos-mitigation/)
5. Scalability

### Examples of CDNs in Use:
- [Cloudflare](https://www.cloudflare.com/en-gb/application-services/products/cdn/)
- [Akamai](https://www.akamai.com/solutions/content-delivery-network)
- [Fastly](https://www.fastly.com/products/cdn)
- [Cloudfront](https://aws.amazon.com/cloudfront/)