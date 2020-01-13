package run;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
		plugin= {"pretty","html:target/cucumber-reports", "json:target/cucumber.json"},
		snippets = SnippetType.CAMELCASE,
		features = "./src/test/resources/practice.feature",
		glue = "stef_def",
		monochrome = true,
		strict = true,
		dryRun = false
		

)
	

public class TestRunnerFile extends AbstractTestNGCucumberTests {

}//Alam is a good student
//rubel is a good mentor