import jwt, {type JwtPayload } from 'jsonwebtoken';

// In a real application, use environment variables
const SECRETKEY = 'secretkey123'; 

// Generate JWT token
export function generateToken(payload: object): string {
    return jwt.sign(
        payload, 
        SECRETKEY, 
        // EXTRAS SETTINGS
        { 
            expiresIn: '1h' 
        }
    );
}

// Verify JWT token
export function verifyToken(token: string): JwtPayload | null {
    try {
        const decodedToken = jwt.verify(token , SECRETKEY);
        if(typeof decodedToken === 'object') {
            return decodedToken as JwtPayload;
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
}