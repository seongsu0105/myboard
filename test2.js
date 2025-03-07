require('dotenv').config(); // dotenv 패키지 설치 필요 (npm install dotenv)
const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI; // 환경 변수에서 MongoDB 연결 문자열 가져오기

async function connectMongoDB() {
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log("✅ MongoDB 연결 성공!");
    } catch (error) {
        console.error("❌ MongoDB 연결 오류:", error);
    } finally {
        await client.close();
        console.log("🔌 MongoDB 연결 종료");
    }
}

// 실행
connectMongoDB();