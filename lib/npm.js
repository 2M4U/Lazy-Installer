/**
 * Credits to Dracovian (https://github.com/Dracovian/) for his magic regex.
 */

const { exec } = require('child_process');
module.exports.npm = function(error) {

    if (error.code === "MODULE_NOT_FOUND") {
        let regex = /Error\: Cannot find module \'(.*)\'/ig;
        error = error.toString();
        let matched = error.match(regex);

        if (matched) {
            let package = error.split(regex)[1];

            const npm = exec(`npm i ${package}`, function(error, stdout, stderr) {
                if (error) {
                    return console.log(`[Lazy Installer]\nError Code: ${error.code} \nStackTrace: ${error.stack}\nSignal Recieved: ${error.signal}`);
                }

                if (stdout) {
                    return console.log('[Lazy Installer]\n' + stdout.toString());
                }

                if (stderr) {
                    return console.log('[Lazy Installer]\n' + stderr.toString());
                }
            });

            npm.on('exit', function(code) {
                return console.log('[Lazy Installer] Exited with ExitCode:' + code);
            });
        }
    }
};