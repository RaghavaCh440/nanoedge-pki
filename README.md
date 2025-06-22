#  nanoedge-pki

**NanoEdge PKI** is a high-performance, compact, and purpose-built cryptographic library that brings secure public key infrastructure (PKI) capabilities to environments where traditional security libraries may be too large or inefficient. This library is specifically optimized for resource-constrained devices, such as Internet of Things (IoT) sensors, edge gateways, wearables, industrial embedded systems, and nano-scale computing units that are increasingly deployed in the modern digital ecosystem.

As the need for decentralized, secure communication continues to grow—especially in smart manufacturing, healthcare, agriculture, and automotive telemetry—systems must exchange sensitive data without relying on centralized trust or powerful CPUs. nanoedge-pki helps bridge this gap by enabling each device to authenticate, sign, and verify messages using Elliptic Curve Cryptography (ECC), which offers strong cryptographic guarantees at a fraction of the computational cost of traditional algorithms like RSA.

This library uses the secp256k1 curve, the same proven curve used in Bitcoin and Ethereum blockchain technologies. It provides excellent security (128-bit strength) with very small key sizes, making it ideal for low-bandwidth networks and low-power processors. This is especially beneficial in mesh networks, telemetry buses, and rural edge deployments where every byte and CPU cycle counts.

By integrating nanoedge-pki, developers can:

Secure data-in-motion with digital signatures

Establish trust between previously unknown devices

Prevent tampering of transmitted commands or telemetry

Comply with data integrity requirements for regulated edge applications

The library is built entirely using Node.js's native crypto module, which ensures reliability, forward compatibility, and minimal external dependencies. This makes it portable and suitable for environments like Raspberry Pi, Jetson Nano, ESP32 gateways running Node.js, or serverless verification services in the cloud.

In essence, nanoedge-pki is not just a cryptographic utility—it is a foundational building block for zero-trust device ecosystems, where security must be enforced even between internal components. Whether you're building smart drones, remote monitoring stations, or micro-robotic systems, this library empowers you to secure your data streams at the edge—where it matters most.



> GitHub: [https://github.com/raghavachellu/nanoedge-pki](https://github.com/RaghavaCh440/nanoedge-pki)

# Feature Breakdown (Elaborated)

## Generate elliptic curve key pairs (secp256k1):
This feature allows devices or applications to generate their own public-private key pairs using the secp256k1 elliptic curve, a cryptographic standard known for its efficiency and security. These keys form the backbone of device identity and secure communication.

## Sign messages using ECDSA with SHA-256:
nanoedge-pki enables digital signing of messages using the Elliptic Curve Digital Signature Algorithm (ECDSA) combined with SHA-256 hashing. This ensures data integrity and non-repudiation, so recipients can verify that a message hasn't been tampered with and was sent by a trusted device.

## Verify signatures against signed payloads:
With the ability to verify ECDSA signatures, devices or services can check whether incoming data truly originates from a known and trusted source, making it a crucial feature for mutual authentication and secure protocol handshakes.

## Built using Node.js native crypto module (no external dependencies):
The library relies entirely on Node.js's built-in crypto module, which ensures high performance, long-term stability, and compatibility across environments without the need for compiling or installing native add-ons.

## Suitable for secure nano/micro device authentication:
Designed with microcontrollers and nano-devices in mind, nanoedge-pki supports secure authentication between ultra-small hardware agents and edge nodes. This is essential in scenarios like secure firmware updates or telemetry reporting.

## Lightweight and fast—perfect for edge computing, IoT, and embedded ML devices:
The small footprint and fast elliptic curve operations make this library ideal for low-latency environments such as real-time sensors, ML inferencing at the edge, or robotics, where every millisecond and byte counts.

## Low-memory and low-CPU compatible:
ECC is significantly more efficient than RSA in constrained environments. This makes the library practical on devices with limited RAM and CPU power.

## Plug-and-play integration:
The simple API allows developers to drop this library into any existing edge or server-side project to immediately add PKI support with minimal boilerplate.

## Secure by design:
Keys are exported in PEM format, and cryptographic primitives follow modern standards, reducing the chances of accidental misconfiguration or cryptographic flaws.

## Portable across platforms:
Runs on any system that supports Node.js, including Linux, macOS, Raspberry Pi, and even lightweight container environments like Alpine.


##  Installation

```bash
npm install nanoedge-pki
```

---

##  Usage

```js
const { generateKeyPair, signMessage, verifyMessage } = require('nanoedge-pki');

// Step 1: Generate ECC key pair
const { publicKey, privateKey } = generateKeyPair();

// Step 2: Sign a message
const message = 'temperature=21.3&device_id=sensor001';
const signature = signMessage(message, privateKey);

// Step 3: Verify the message
const isValid = verifyMessage(message, signature, publicKey);
console.log('Signature valid:', isValid); // true or false
```

---

##  Directory Structure

```
nanoedge-pki/
├── index.js                # Public interface
├── lib/
│   └── crypto.js           # Core cryptographic logic
├── package.json
├── LICENSE
└── README.md
```

---

## Cryptographic Notes

-  Uses **secp256k1** (same as Bitcoin/Ethereum)
-  Fast and secure with compact key sizes
-  Ideal for nano-devices, mesh networks, and bandwidth-constrained systems

---

##  Use Cases

- Secure authentication between sensor nodes and gateways
- Lightweight digital signatures for data integrity in edge computing
- Verifying firmware updates or data packets from constrained hardware

---

## License

MIT License

Copyright (c) 2025 Raghava Chellu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

## Author

Made with by **Raghava Chellu**  
GitHub: [@raghavachellu](https://github.com/RaghavaCh440)

---

