package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class ContactUsStepDefinitions {
	
	WebDriver driver;
	
	@Given("^user is already on Roicion page$")
	
	public void user_is_already_on_Roicion_page() {
		System.setProperty("webdriver.chrome.driver","C:\\selenium testing related\\chromedriver.exe");
		 driver=new ChromeDriver();
		 driver.get("https://www.roicians.com/");
		}
	
	
	@When("^title of login page is Roician$")
	
	public void title_of_login_page_is_Roician() {
		String title = driver.getTitle();
		 System.out.println(title);
		 Assert.assertEquals("QA, SQL,Oracle Database and BA Training along with Web Development - Roicians", title);
		
		}
	
	@Then("^user click on Contact Us$")
	public void user_click_on_Contact_Us() {
		driver.findElement(By.cssSelector("#menu-item-4173 > a")).click();
		
	}
	
	@Then("^user enter \"(.*)\" and \"(.*)\" and \"(.*)\" and \"(.*)\"$")
	public void user_enter_YourName_and_YourEmail_and_Subject_and_YourMessage(String YourName, String YourEmail , String Subject , String YourMessage) {
		driver.findElement(By.xpath("//input[@type='text'and@name='your-name']")).sendKeys("Your Name");
		driver.findElement(By.name("your-email")).sendKeys("Your Email");
		driver.findElement(By.name("your-subject")).sendKeys("Subject");
		driver.findElement(By.name("your-message")).sendKeys("Your Message");
	}
	@Then("^user click on SEND$")
	public void user_click_on_SEND() {
		driver.findElement(By.xpath("//input[@type='submit'and@value='Send']")).click();
	}
	@Then("^user click on About Us$")
	public void user_click_on_About_Us()  {
		driver.findElement(By.cssSelector("#menu-item-185 > a:nth-child(1)")).click();
	}
	
	@Then("^check image$")
	public void check_image()  {
		boolean image = driver.findElement(By.cssSelector(".image")) != null;
		Assert.assertTrue(image);
	}
}
