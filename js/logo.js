// logo.js - Pahtia Labs logo SVG generator
export function createLogo(size = 40, id = 'hexGrad') {
    return `
        <svg width="${size}" height="${size}" viewBox="0 0 100 100">
            <defs>
                <linearGradient id="${id}" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#818cf8" />
                    <stop offset="100%" style="stop-color:#a78bfa" />
                </linearGradient>
            </defs>
            <polygon points="50,15 80,32.5 80,67.5 50,85 20,67.5 20,32.5" 
                     fill="none" stroke="url(#${id})" stroke-width="3"/>
            <circle cx="50" cy="50" r="12" fill="none" stroke="#3b82f6" stroke-width="2" opacity="0.7"/>
            <circle cx="50" cy="50" r="3" fill="#3b82f6"/>
            <circle cx="50" cy="15" r="3" fill="#c4b5fd"/>
            <circle cx="80" cy="32.5" r="3" fill="#c4b5fd"/>
            <circle cx="80" cy="67.5" r="3" fill="#c4b5fd"/>
            <circle cx="50" cy="85" r="3" fill="#c4b5fd"/>
            <circle cx="20" cy="67.5" r="3" fill="#c4b5fd"/>
            <circle cx="20" cy="32.5" r="3" fill="#c4b5fd"/>
        </svg>
    `;
}

export function createHeroLogo(size = 120) {
    return `
        <svg width="${size}" height="${size}" viewBox="0 0 100 100" class="mx-auto">
            <defs>
                <linearGradient id="heroHexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#818cf8" />
                    <stop offset="100%" style="stop-color:#a78bfa" />
                </linearGradient>
            </defs>
            <polygon points="50,15 80,32.5 80,67.5 50,85 20,67.5 20,32.5" 
                     fill="none" stroke="url(#heroHexGrad)" stroke-width="3"/>
            <circle cx="50" cy="50" r="12" fill="none" stroke="#3b82f6" stroke-width="2" opacity="0.7"/>
            <circle cx="50" cy="50" r="7" fill="none" stroke="#60a5fa" stroke-width="1.5" opacity="0.8"/>
            <circle cx="50" cy="50" r="3" fill="#3b82f6"/>
            <circle cx="50" cy="15" r="3" fill="#c4b5fd" stroke="#818cf8" stroke-width="1"/>
            <circle cx="80" cy="32.5" r="3" fill="#c4b5fd" stroke="#818cf8" stroke-width="1"/>
            <circle cx="80" cy="67.5" r="3" fill="#c4b5fd" stroke="#818cf8" stroke-width="1"/>
            <circle cx="50" cy="85" r="3" fill="#c4b5fd" stroke="#818cf8" stroke-width="1"/>
            <circle cx="20" cy="67.5" r="3" fill="#c4b5fd" stroke="#818cf8" stroke-width="1"/>
            <circle cx="20" cy="32.5" r="3" fill="#c4b5fd" stroke="#818cf8" stroke-width="1"/>
        </svg>
    `;
}

export function createFooterLogo(size = 32) {
    return `
        <svg width="${size}" height="${size}" viewBox="0 0 100 100">
            <defs>
                <linearGradient id="footerHexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#818cf8" />
                    <stop offset="100%" style="stop-color:#a78bfa" />
                </linearGradient>
            </defs>
            <polygon points="50,15 80,32.5 80,67.5 50,85 20,67.5 20,32.5" 
                     fill="none" stroke="url(#footerHexGrad)" stroke-width="3"/>
            <circle cx="50" cy="50" r="8" fill="none" stroke="#60a5fa" stroke-width="2"/>
            <circle cx="50" cy="50" r="3" fill="#3b82f6"/>
        </svg>
    `;
}
