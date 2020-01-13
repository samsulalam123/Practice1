package page_factory;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class AllXpath {
		
		@FindBy(xpath = "(//*[contains(text(),'Sign in')])[1]")
		private List<WebElement> SignIn;

		public List<WebElement> getSignIn() {
			return SignIn;
		
		}
		
		
	}
	

