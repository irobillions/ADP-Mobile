export default class ValidationError {
    private errors: object = {};

    records(errors) {
        this.errors = errors.message;
    }
    get(name: string) {
        return this.errors[name] || '';
    }
}
