export default [
    {
        ignores: ["node_modules/", "dist/"]
    },
    {
        files: ["js/**/*.js"],
        rules: {
            "no-unused-vars": "warn", 
            "semi": ["error", "always"], 
            "quotes": ["error", "single"] 
        }
    }
];