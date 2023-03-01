class Member {

    #memberInfo = {
        mName: 'Default Name',
        mAge: 0
    }

    constructor(name, age) {
        this.#memberInfo.mName = name;
        this.#memberInfo.mAge = age;
    }

    showMyDetails() {
        console.log(`Name : ${this.#memberInfo.mName}`);
        console.log(`Age : ${this.#memberInfo.mAge}`);
    }

    changeName(newName) {
        if (newName.localeCompare(this.#memberInfo.mName) === 0) {
            console.log(`\nName cannot be updated; as you have same name already stored in the system.`);
        } else {
            this.#memberInfo.mName = newName;
            console.log(`\nYour name in the system is updated to '${newName}'`);
        }
    }

}
module.exports = Member;