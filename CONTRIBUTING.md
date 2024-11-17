### 🧹🕸 Linting

Use [goimports](https://pkg.go.dev/golang.org/x/tools/cmd/goimports) for formatting and linting, and [gci](https://github.com/daixiang0/gci) for import order.

Install it:

    go install golang.org/x/tools/cmd/goimports@v0.22
    go install github.com/daixiang0/gci@v0.13.5

Run it:

    goimports -w . && gci write .
