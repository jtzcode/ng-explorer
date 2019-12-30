// Class decorators

function log(constructor: any) {
    return function (...args: any[]) {
        console.log(`New ${constructor.name} created!`);
        return new constructor(...args);
    } as typeof constructor
}

@log
class Yogurt {
    public flavor: string;
    constructor(flavor: string) {
        this.flavor = flavor;
    }
};

const yogurt = new Yogurt("coco");
const yogurt1 = new Yogurt("strawberry");
const yogurt2 = new Yogurt("vanila");

// Method decorators

function excludeProperties(propertiesToExclude: string[]) {
    return (target: any, propertyName: string, descriptor: PropertyDescriptor) => {
        const originalFunction = descriptor.value;
        descriptor.value = async function (...args: any[]) {
            const originalResult = await originalFunction.apply(this, args);
            propertiesToExclude.forEach((propertyName) => {
                delete originalResult[propertyName];
            });
            return originalResult;
        }
     };
}