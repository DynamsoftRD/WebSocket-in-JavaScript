#r "System.Drawing.dll"
using System.Threading.Tasks;
using System.Drawing;

public class Startup
{
    public async Task<object> Invoke(object input)
    {	
		byte[] imageBuffer;
		Image image = Image.FromFile("dynamsoft_logo.jpg");
        using (System.IO.MemoryStream stream = new System.IO.MemoryStream())
        {
            image.Save(stream, System.Drawing.Imaging.ImageFormat.Jpeg);
            imageBuffer = stream.GetBuffer();
        }
			
        return imageBuffer;
    }
}
