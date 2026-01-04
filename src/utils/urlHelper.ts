/**
 * Helper function to handle URLs for deployment
 * Returns the URL as-is since we're not using basePath for Vercel deployment
 */

/**
 * Return the URL without any prefix for Vercel deployment
 * @param url - The URL to return (should start with /)
 * @returns The URL as-is
 */
export const withBasePath = (url: string): string => {
    return url
}