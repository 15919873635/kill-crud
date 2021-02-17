const pro = process;
const argvs = pro.argv;

const commands = argvs.filter((item, index) => {
    return index > 1;
});

if (commands.length === 0) {
    console.log();
}
