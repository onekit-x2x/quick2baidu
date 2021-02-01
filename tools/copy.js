//console.log(process.cwd())
const fs = require('fs-extra')
const path = require('path')
const { exec } = require('child_process');

const cwd = process.cwd()
const dist = 'smartprogram_dist'

const list = fs.readdirSync(path.join(cwd, dist))
list.forEach(file => {
    const stat = fs.lstatSync(path.join(cwd, dist, file))
    if (stat.isDirectory() && (['ui'].includes(file))) {
        const ui = fs.readdirSync(path.join(cwd, dist,file))
        ui.forEach(name => {
            const pkg = fs.readFileSync(`${cwd}/src/${file}/${name}/${name}/package.json`)
            fs.writeFileSync(`${cwd}/${dist}/${file}/${name}/${name}/package.json`,pkg)
        })
    }
})
const package = JSON.parse(fs.readFileSync(`${cwd}/package.json`));
const url = `${path.join(cwd, dist)}/package.json`;
const dist_package = JSON.parse(fs.readFileSync(url));
dist_package.dependencies = package.dependencies;
fs.writeFileSync(url,JSON.stringify(dist_package,null, 2));