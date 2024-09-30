// gen ts type declaration using tsc
// input: ./input.json
// output: ./deduce-type-object.d.ts
// dependencies: tsc, js runtime

const fs = require('fs')
const cp = require('child_process')

function deduceType(json)
{
    json = JSON.stringify(typeof json === "string" ? JSON.parse(json) : json, null, ' ')
    /*const withHint = json.split('\n').map(line => {
        try{
            const lineObject = JSON.parse('{ ' + line + ' }');
            const key = Object.keys(lineObject)[0];
            const value = JSON.stringify(lineObject[key]);

            if(key === undefined)
                return line;

            return JSON.stringify(key) + ': ' + value + ' as ' + value;
        }catch(e){}
        return line;
    }).join('\n');*/
    fs.writeFileSync('deduce-type-object.ts', 'const a = ' + json);
    cp.execSync('tsc deduce-type-object.ts --declaration --emitDeclarationOnly')
}

json = fs.readFileSync('input.json', { encoding: 'utf-8' }).toString()
console.log(deduceType(json));
