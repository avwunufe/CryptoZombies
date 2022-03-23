const { assert } = require("chai");

async function shouldThrow(promise){
try {
    await promise;
    assert(true)
} catch (error) {
    return;
}
assert(false, "the contract no throw")
}

module.exports = {
    shouldThrow,
}