export default async function handler(req, res) {
    const { drwNo } = req.query;
    try {
        const response = await fetch(`https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${drwNo}`);
        const data = await response.json();
        
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch lotto data" });
    }
}
