const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default (emails) => {
    const invalidEmails = emails
        .split(',')
        .map(email => {
            if (email.trim().length === 0) {
                return 'Existe uma virgula no final da lista de email'
            }
            return email.trim()
        })
        .filter(email => re.test(email) === false)

    if (invalidEmails.length) {
        return `Os seguintes emails estão invalidos: ${invalidEmails}`;
    }

    return;
}