using System.ComponentModel.DataAnnotations.Schema;

[Table("usuarios")]
public class RegisterViewModel
{
    public int Id { get; set; }
    public string Username { get; set; }
    public string Password { get; set; }
    public string Email { get; set; }
}