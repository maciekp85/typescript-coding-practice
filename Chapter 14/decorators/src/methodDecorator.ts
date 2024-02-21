export function time(label? : string) {
    return function(method, ctx: ClassMethodDecoratorContext) {
        const methodName = label ?? String(ctx.name);
        return function(this, ...args: any[]) {
            const start = performance.now();
            console.log(`${methodName} started`);
            const result = method.call(this, ...args);
            const duration = (performance.now() - start).toFixed(2);
            console.log(`${methodName} ended ${duration} ms`);
            return result;
        }
    }
}