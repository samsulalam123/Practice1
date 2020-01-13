package stef_def;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page_factory.AllXpath;

public class stef_defpractice {
	WebDriver driver;
	AllXpath newpf;
	
	@Given("^open the chrome browser$")
	public void open_the_chrome_browser() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "./Driver/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}

	@Given("^Enter the \"([^\"]*)\"$")
	public void enter_the(String URL) throws Throwable {
		driver.get(URL);
	   
	}
	@When("^Click on sign button$")
	public void click_on_sign_button() throws Throwable {
		newpf = PageFactory.initElements(driver, AllXpath.class);
		newpf.getSignIn().get(0).click();
	}

	@Then("^exit the browser$")
	public void exit_the_browser() throws Throwable {
		driver.quit();
	   	}


	
}
