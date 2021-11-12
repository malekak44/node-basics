const os = require('os');

// info about current user
const userInfo = os.userInfo();

// method returns the system uptime in seconds
const uptime = `The system uptime is ${os.uptime} seconds.`;

// info about current os
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    arch: os.arch(),
    cpus: os.cpus(),
    tmpdir: os.tmpdir(),
    homedir: os.homedir(),
    loadavg: os.loadavg(),
    platform: os.platform(),
    hostname: os.hostname(),
    endinness: os.endianness(),
    networkInterfaces: os.networkInterfaces(),
}

console.log(userInfo, uptime, currentOS);